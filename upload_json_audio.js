const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://lwwvhvgfdqlqslkwchvy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3d3ZodmdmZHFscXNsa3djaHZ5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTQwODE3NCwiZXhwIjoyMDQ2OTg0MTc0fQ.ByFJ1P9eKGqKw3WQHvONbWkcIWJZ4YLB9Iag79e67Ak';

const supabase = createClient(supabaseUrl, supabaseKey);

const jsonAudioFiles = [
  // ERROR 8 - De Facto Parent Status (Most Critical)
  { file: 'original_audio_court/json_precise/ben_de_facto_parent_20_37.mp3', name: 'ben_de_facto_parent_20_37_json.mp3', description: 'Ben 20:37 - De facto parent argument (2s)' },
  { file: 'original_audio_court/json_precise/judge_de_facto_ignorance_20_44.mp3', name: 'judge_de_facto_ignorance_20_44_json.mp3', description: 'Judge 20:44 - No such thing as de facto parent (5s)' },
  
  // Locus Standi Arguments  
  { file: 'original_audio_court/json_precise/ben_locus_standi_14_18.mp3', name: 'ben_locus_standi_14_18_json.mp3', description: 'Ben 14:18 - Locus standi legal argument (19s)' },
  { file: 'original_audio_court/json_precise/judge_two_parents_14_37.mp3', name: 'judge_two_parents_14_37_json.mp3', description: 'Judge 14:37 - Two parents dismissal (5s)' },
  
  // Due Process
  { file: 'original_audio_court/json_precise/ben_due_process_18_28.mp3', name: 'ben_due_process_18_28_json.mp3', description: 'Ben 18:28 - Due process cooperation harm (35s)' },
  { file: 'original_audio_court/json_precise/judge_interruption_18_25.mp3', name: 'judge_interruption_18_25_json.mp3', description: 'Judge 18:25 - Unclear interruption (3s)' },
  
  // Foster Assessment
  { file: 'original_audio_court/json_precise/ben_foster_assessment_16_38.mp3', name: 'ben_foster_assessment_16_38_json.mp3', description: 'Ben 16:38 - Foster assessment denial (68s)' },
  
  // Child Welfare
  { file: 'original_audio_court/json_precise/judge_child_catastrophe_28_34.mp3', name: 'judge_child_catastrophe_28_34_json.mp3', description: 'Judge 28:34 - Child catastrophe statement (15s)' },
  
  // Video Context
  { file: 'original_audio_court/json_precise/ben_video_defense_33_54.mp3', name: 'ben_video_defense_33_54_json.mp3', description: 'Ben 33:54 - Video context defense (9s)' },
  { file: 'original_audio_court/json_precise/judge_mayor_dismissal_33_45.mp3', name: 'judge_mayor_dismissal_33_45_json.mp3', description: 'Judge 33:45 - Mayor vulnerable child dismissal (9s)' },
  
  // Information Withholding
  { file: 'original_audio_court/json_precise/ben_information_challenge_38_27.mp3', name: 'ben_information_challenge_38_27_json.mp3', description: 'Ben 38:27 - Information withholding challenge (27s)' },
  { file: 'original_audio_court/json_precise/judge_withhold_justification_40_41.mp3', name: 'judge_withhold_justification_40_41_json.mp3', description: 'Judge 40:41 - Withhold information justification (33s)' }
];

async function uploadJsonAudio() {
  console.log('Uploading JSON-based precise audio segments to Supabase...');
  
  const urls = {};
  
  for (const audioFile of jsonAudioFiles) {
    try {
      console.log(`Uploading ${audioFile.file}...`);
      
      const fileBuffer = fs.readFileSync(audioFile.file);
      
      const { data, error } = await supabase.storage
        .from('court-audio')  
        .upload(audioFile.name, fileBuffer, {
          cacheControl: '3600',
          upsert: true,
          contentType: 'audio/mpeg'
        });

      if (error) {
        console.error(`Error uploading ${audioFile.file}:`, error);
      } else {
        const { data: urlData } = supabase.storage
          .from('court-audio')
          .getPublicUrl(audioFile.name);
        
        console.log(`✅ ${audioFile.description} -> ${urlData.publicUrl}`);
        urls[audioFile.name] = urlData.publicUrl;
      }
    } catch (err) {
      console.error(`Failed to upload ${audioFile.file}:`, err);
    }
  }
  
  console.log('\n=== JSON-BASED SUPABASE URLS ===');
  Object.entries(urls).forEach(([name, url]) => {
    console.log(`${name}: ${url}`);
  });
  
  return urls;
}

uploadJsonAudio().catch(console.error);