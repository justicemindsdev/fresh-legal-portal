const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Supabase configuration
const supabaseUrl = 'https://tvecnfdqakrevzaeifpk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWNuZmRxYWtyZXZ6YWVpZnBrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODM4MjA2NCwiZXhwIjoyMDYzOTU4MDY0fQ.KqzZr0iiPNYHFzEzT8utRAu3EorO3LFDbh3dd-U_42c'

const supabase = createClient(supabaseUrl, supabaseKey)

// Audio files to upload from original_audio_court/audio folder
const audioFiles = [
  { file: 'original_audio_court/audio/ben_locus_parentis_argument.mp3', description: 'Ben 14:18 - locus standi argument' },
  { file: 'original_audio_court/audio/judge_two_parents_dismissal.mp3', description: 'Judge 14:37 - dismisses legal principle' },
  { file: 'original_audio_court/audio/ben_foster_assessment_denial.mp3', description: 'Ben 16:38 - foster assessment request' },
  { file: 'original_audio_court/audio/judge_silent_dismissal.mp3', description: 'Judge 16:38 - no acknowledgement' },
  { file: 'original_audio_court/audio/ben_cooperation_harm_statement.mp3', description: 'Ben 18:28 - safeguarding breach' },
  { file: 'original_audio_court/audio/judge_unclear_interruption.mp3', description: 'Judge 18:25 - confusion/disinterest' },
  { file: 'original_audio_court/audio/ben_no_contact_consideration.mp3', description: 'Ben 28:49 - support request' },
  { file: 'original_audio_court/audio/judge_child_catastrophe_statement.mp3', description: 'Judge 28:34 - catastrophe language' },
  { file: 'original_audio_court/audio/ben_video_context_defense.mp3', description: 'Ben 34:03 - video context explanation' },
  { file: 'original_audio_court/audio/judge_mayor_vulnerable_child_dismissal.mp3', description: 'Judge 33:45 - reframes as blameworthy' },
  { file: 'original_audio_court/audio/ben_information_withholding_challenge.mp3', description: 'Ben 38:27 - information withholding question' },
  { file: 'original_audio_court/audio/judge_withhold_information_justification.mp3', description: 'Judge 38:54 - technical exclusion' }
]

async function uploadAudioFiles() {
  console.log('Starting audio upload to Supabase...')
  
  for (const audioFile of audioFiles) {
    try {
      const filePath = path.join(__dirname, audioFile.file)
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${audioFile.file}`)
        continue
      }
      
      // Read file
      const fileBuffer = fs.readFileSync(filePath)
      
      // Upload to Supabase
      const { data, error } = await supabase.storage
        .from('audio-evidence')
        .upload(audioFile.file, fileBuffer, {
          contentType: 'audio/mpeg',
          upsert: true
        })
      
      if (error) {
        console.log(`❌ Error uploading ${audioFile.file}:`, error.message)
      } else {
        const publicUrl = supabase.storage
          .from('audio-evidence')
          .getPublicUrl(audioFile.file)
        
        console.log(`✅ Uploaded: ${audioFile.file}`)
        console.log(`   Description: ${audioFile.description}`)
        console.log(`   URL: ${publicUrl.data.publicUrl}`)
        console.log('')
      }
    } catch (err) {
      console.log(`❌ Error processing ${audioFile.file}:`, err.message)
    }
  }
  
  console.log('Upload process completed!')
}

// Run the upload
uploadAudioFiles().catch(console.error)