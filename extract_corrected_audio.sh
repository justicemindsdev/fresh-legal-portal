#!/bin/bash

# Extract corrected audio segments based on actual transcript timestamps
SOURCE_AUDIO="original_audio_court/CLEAN_AUDIO_LIVERPOOL_COURT.mp3"

echo "Extracting corrected audio segments from court recording..."

# Remove old files
rm -f original_audio_court/audio/*.mp3

# Ben's statements with correct timestamps and durations
ffmpeg -i "$SOURCE_AUDIO" -ss 14:18 -t 7 -acodec mp3 original_audio_court/audio/ben_locus_parentis_argument.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 16:38 -t 10 -acodec mp3 original_audio_court/audio/ben_foster_assessment_denial.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 18:28 -t 8 -acodec mp3 original_audio_court/audio/ben_cooperation_harm_statement.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 28:49 -t 12 -acodec mp3 original_audio_court/audio/ben_no_contact_consideration.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 33:54 -t 8 -acodec mp3 original_audio_court/audio/ben_video_context_defense.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 38:27 -t 10 -acodec mp3 original_audio_court/audio/ben_information_withholding_challenge.mp3

# Judge's dismissive responses with correct timestamps
ffmpeg -i "$SOURCE_AUDIO" -ss 14:37 -t 5 -acodec mp3 original_audio_court/audio/judge_two_parents_dismissal.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 16:48 -t 3 -acodec mp3 original_audio_court/audio/judge_silent_dismissal.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 18:25 -t 3 -acodec mp3 original_audio_court/audio/judge_unclear_interruption.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 28:34 -t 8 -acodec mp3 original_audio_court/audio/judge_child_catastrophe_statement.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 33:45 -t 9 -acodec mp3 original_audio_court/audio/judge_mayor_vulnerable_child_dismissal.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 38:54 -t 15 -acodec mp3 original_audio_court/audio/judge_withhold_information_justification.mp3

echo "Corrected audio extraction complete!"
echo "Files created:"
ls -la original_audio_court/audio/*.mp3