const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://tvecnfdqakrevzaeifpk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWNuZmRxYWtyZXZ6YWVpZnBrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODM4MjA2NCwiZXhwIjoyMDYzOTU4MDY0fQ.KqzZr0iiPNYHFzEzT8utRAu3EorO3LFDbh3dd-U_42c';

const supabase = createClient(supabaseUrl, supabaseKey);

const jsonAudioFiles = [
  // ERROR 8 - De Facto Parent Status (Most Critical)
  { file: 'original_audio_court/json_precise/ben_de_facto_parent_20_37.mp3', name: 'ben_de_facto_parent_20_37_json.mp3', description: 'Ben 20:37 - De facto parent argument (2s)', timestamp: '20:37' },
  { file: 'original_audio_court/json_precise/judge_de_facto_ignorance_20_44.mp3', name: 'judge_de_facto_ignorance_20_44_json.mp3', description: 'Judge 20:44 - No such thing as de facto parent (5s)', timestamp: '20:44' },
  
  // Locus Standi Arguments  
  { file: 'original_audio_court/json_precise/ben_locus_standi_14_18.mp3', name: 'ben_locus_standi_14_18_json.mp3', description: 'Ben 14:18 - Locus standi legal argument (19s)', timestamp: '14:18' },
  { file: 'original_audio_court/json_precise/judge_two_parents_14_37.mp3', name: 'judge_two_parents_14_37_json.mp3', description: 'Judge 14:37 - Two parents dismissal (5s)', timestamp: '14:37' },
  
  // Due Process
  { file: 'original_audio_court/json_precise/ben_due_process_18_28.mp3', name: 'ben_due_process_18_28_json.mp3', description: 'Ben 18:28 - Due process cooperation harm (35s)', timestamp: '18:28' },
  { file: 'original_audio_court/json_precise/judge_interruption_18_25.mp3', name: 'judge_interruption_18_25_json.mp3', description: 'Judge 18:25 - Unclear interruption (3s)', timestamp: '18:25' },
  
  // Foster Assessment
  { file: 'original_audio_court/json_precise/ben_foster_assessment_16_38.mp3', name: 'ben_foster_assessment_16_38_json.mp3', description: 'Ben 16:38 - Foster assessment denial (68s)', timestamp: '16:38' },
  
  // Child Welfare
  { file: 'original_audio_court/json_precise/judge_child_catastrophe_28_34.mp3', name: 'judge_child_catastrophe_28_34_json.mp3', description: 'Judge 28:34 - Child catastrophe statement (15s)', timestamp: '28:34' },
  
  // Video Context
  { file: 'original_audio_court/json_precise/ben_video_defense_33_54.mp3', name: 'ben_video_defense_33_54_json.mp3', description: 'Ben 33:54 - Video context defense (9s)', timestamp: '33:54' },
  { file: 'original_audio_court/json_precise/judge_mayor_dismissal_33_45.mp3', name: 'judge_mayor_dismissal_33_45_json.mp3', description: 'Judge 33:45 - Mayor vulnerable child dismissal (9s)', timestamp: '33:45' },
  
  // Information Withholding
  { file: 'original_audio_court/json_precise/ben_information_challenge_38_27.mp3', name: 'ben_information_challenge_38_27_json.mp3', description: 'Ben 38:27 - Information withholding challenge (27s)', timestamp: '38:27' },
  { file: 'original_audio_court/json_precise/judge_withhold_justification_40_41.mp3', name: 'judge_withhold_justification_40_41_json.mp3', description: 'Judge 40:41 - Withhold information justification (33s)', timestamp: '40:41' },
  
  // Child Distress Evidence
  { file: 'ben_hair_pulling_25_35.mp3', name: 'ben_hair_pulling_25_35_json.mp3', description: 'Ben 25:35 - Hair pulling distress evidence (20s)', timestamp: '25:35' },
  { file: 'ben_maria_moore_15_39.mp3', name: 'ben_maria_moore_15_39_json.mp3', description: 'Ben 15:39 - Maria Moore procedural failure (11s)', timestamp: '15:39' }
];

async function uploadJsonToSupabase() {
  console.log('Uploading JSON-based precise audio segments to Supabase...');
  console.log(`Using URL: ${supabaseUrl}`);
  
  const urls = {};
  const urlMappings = {};
  
  for (const audioFile of jsonAudioFiles) {
    try {
      console.log(`\nUploading ${audioFile.description}...`);
      console.log(`File: ${audioFile.file}`);
      
      const fileBuffer = fs.readFileSync(audioFile.file);
      console.log(`File size: ${fileBuffer.length} bytes`);
      
      const { data, error } = await supabase.storage
        .from('audio-evidence')  
        .upload(`json_precise/${audioFile.name}`, fileBuffer, {
          cacheControl: '3600',
          upsert: true,
          contentType: 'audio/mpeg'
        });

      if (error) {
        console.error(`❌ Error uploading ${audioFile.file}:`, error);
      } else {
        const { data: urlData } = supabase.storage
          .from('audio-evidence')
          .getPublicUrl(`json_precise/${audioFile.name}`);
        
        console.log(`✅ ${audioFile.description}`);
        console.log(`   -> ${urlData.publicUrl}`);
        
        urls[audioFile.name] = urlData.publicUrl;
        urlMappings[audioFile.timestamp] = urlData.publicUrl;
      }
    } catch (err) {
      console.error(`❌ Failed to upload ${audioFile.file}:`, err.message);
    }
  }
  
  console.log('\n=== JSON-BASED SUPABASE URLS BY TIMESTAMP ===');
  Object.entries(urlMappings).forEach(([timestamp, url]) => {
    console.log(`${timestamp}: ${url}`);
  });
  
  console.log('\n=== ALL URLS ===');
  Object.entries(urls).forEach(([name, url]) => {
    console.log(`${name}: ${url}`);
  });
  
  return { urls, urlMappings };
}

uploadJsonToSupabase()
  .then(result => {
    console.log('\n🎉 Upload completed successfully!');
    console.log(`Total files uploaded: ${Object.keys(result.urls).length}`);
  })
  .catch(console.error);
