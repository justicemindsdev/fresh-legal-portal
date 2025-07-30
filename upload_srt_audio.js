const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = 'https://tvecnfdqakrevzaeifpk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWNuZmRxYWtyZXZ6YWVpZnBrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODM4MjA2NCwiZXhwIjoyMDYzOTU4MDY0fQ.KqzZr0iiPNYHFzEzT8utRAu3EorO3LFDbh3dd-U_42c';

const supabase = createClient(supabaseUrl, supabaseKey);

const srtAudioFiles = [
  {
    file: 'original_audio_court/srt_precise/ben_de_facto_20_37_srt.mp3',
    name: 'ben_de_facto_20_37_srt.mp3', 
    description: 'Ben 20:37 - "De facto parents it would be" (1.84s)',
    text: 'De facto parents it would be.',
    timestamp: '20:37'
  },
  {
    file: 'original_audio_court/srt_precise/judge_two_parents_14_34_srt.mp3',
    name: 'judge_two_parents_14_34_srt.mp3',
    description: 'Judge 14:34 - "two parents who have parental" (3.28s)', 
    text: 'According to case law, it does. Not when you\'ve got two parents who have parental',
    timestamp: '14:34'
  }
];

async function uploadSrtAudio() {
  console.log('Uploading SRT-precise audio segments to Supabase...');
  
  const results = {};
  
  for (const audioFile of srtAudioFiles) {
    try {
      console.log(`\nUploading ${audioFile.description}...`);
      
      const fileBuffer = fs.readFileSync(audioFile.file);
      console.log(`File size: ${fileBuffer.length} bytes`);
      
      const { data, error } = await supabase.storage
        .from('audio-evidence')  
        .upload(`srt_precise/${audioFile.name}`, fileBuffer, {
          cacheControl: '3600',
          upsert: true,
          contentType: 'audio/mpeg'
        });

      if (error) {
        console.error(`❌ Error uploading ${audioFile.file}:`, error);
      } else {
        const { data: urlData } = supabase.storage
          .from('audio-evidence')
          .getPublicUrl(`srt_precise/${audioFile.name}`);
        
        console.log(`✅ ${audioFile.description}`);
        console.log(`   Text: "${audioFile.text}"`);
        console.log(`   URL: ${urlData.publicUrl}`);
        
        results[audioFile.timestamp] = {
          url: urlData.publicUrl,
          text: audioFile.text,
          duration: audioFile.file.includes('ben_de_facto') ? '1.84s' : '3.28s'
        };
      }
    } catch (err) {
      console.error(`❌ Failed to upload ${audioFile.file}:`, err.message);
    }
  }
  
  console.log('\n=== SRT-BASED SUPABASE URLS ===');
  Object.entries(results).forEach(([timestamp, data]) => {
    console.log(`${timestamp}: ${data.url}`);
    console.log(`  "${data.text}" (${data.duration})`);
  });
  
  return results;
}

uploadSrtAudio()
  .then(result => {
    console.log(`\n🎉 Successfully uploaded ${Object.keys(result).length} SRT-precise segments!`);
  })
  .catch(console.error);