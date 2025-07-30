const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = 'https://lwwvhvgfdqlqslkwchvy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3d3ZodmdmZHFscXNsa3djaHZ5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTQwODE3NCwiZXhwIjoyMDQ2OTg0MTc0fQ.ByFJ1P9eKGqKw3WQHvONbWkcIWJZ4YLB9Iag79e67Ak';

const supabase = createClient(supabaseUrl, supabaseKey);

const preciseAudioFiles = [
  { file: 'original_audio_court/precise/ben_de_facto_parent_argument.mp3', name: 'ben_de_facto_parent_argument_precise.mp3' },
  { file: 'original_audio_court/precise/judge_de_facto_parent_ignorance.mp3', name: 'judge_de_facto_parent_ignorance_precise.mp3' },
  { file: 'original_audio_court/precise/ben_locus_standi_legal_argument.mp3', name: 'ben_locus_standi_legal_argument_precise.mp3' },
  { file: 'original_audio_court/precise/judge_two_parents_dismissal.mp3', name: 'judge_two_parents_dismissal_precise.mp3' },
  { file: 'original_audio_court/precise/ben_due_process_cooperation_harm.mp3', name: 'ben_due_process_cooperation_harm_precise.mp3' },
  { file: 'original_audio_court/precise/judge_unclear_interruption.mp3', name: 'judge_unclear_interruption_precise.mp3' },
  { file: 'original_audio_court/precise/ben_foster_assessment_denial.mp3', name: 'ben_foster_assessment_denial_precise.mp3' },
  { file: 'original_audio_court/precise/judge_child_catastrophe_statement.mp3', name: 'judge_child_catastrophe_statement_precise.mp3' },
  { file: 'original_audio_court/precise/ben_video_context_defense.mp3', name: 'ben_video_context_defense_precise.mp3' },
  { file: 'original_audio_court/precise/judge_mayor_vulnerable_child_dismissal.mp3', name: 'judge_mayor_vulnerable_child_dismissal_precise.mp3' },
  { file: 'original_audio_court/precise/ben_information_withholding_challenge.mp3', name: 'ben_information_withholding_challenge_precise.mp3' },
  { file: 'original_audio_court/precise/judge_withhold_information_justification.mp3', name: 'judge_withhold_information_justification_precise.mp3' }
];

async function uploadPreciseAudio() {
  console.log('Uploading precise audio segments to Supabase...');
  
  const urls = {};
  
  for (const audioFile of preciseAudioFiles) {
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
        
        console.log(`✅ ${audioFile.file} -> ${urlData.publicUrl}`);
        urls[audioFile.name] = urlData.publicUrl;
      }
    } catch (err) {
      console.error(`Failed to upload ${audioFile.file}:`, err);
    }
  }
  
  console.log('\n=== PRECISE SUPABASE URLS ===');
  Object.entries(urls).forEach(([name, url]) => {
    console.log(`${name}: ${url}`);
  });
  
  return urls;
}

uploadPreciseAudio().catch(console.error);