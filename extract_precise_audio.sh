#!/bin/bash

# Extract precise audio segments based on court_scene_complete_segments.json
SOURCE_AUDIO="original_audio_court/CLEAN_AUDIO_LIVERPOOL_COURT.mp3"

echo "Extracting precise audio segments from JSON timestamp data..."

# Create precise folder
mkdir -p original_audio_court/precise

# ERROR 8 - De Facto Parent Status (Most Important)
# Ben Mak segment 60: 20:37 duration 2 seconds "De facto parent it would be and."
ffmpeg -i "$SOURCE_AUDIO" -ss 20:37 -t 2 -acodec mp3 original_audio_court/precise/ben_de_facto_parent_argument.mp3

# Judge segment 63: 20:44 duration 5 seconds "There is no such thing as a de facto parent..."
ffmpeg -i "$SOURCE_AUDIO" -ss 20:44 -t 5 -acodec mp3 original_audio_court/precise/judge_de_facto_parent_ignorance.mp3

# Ben's Locus Standi argument - segment 30: 14:18 duration 19 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 14:18 -t 19 -acodec mp3 original_audio_court/precise/ben_locus_standi_legal_argument.mp3

# Judge's dismissal - segment 31: 14:37 duration 5 seconds  
ffmpeg -i "$SOURCE_AUDIO" -ss 14:37 -t 5 -acodec mp3 original_audio_court/precise/judge_two_parents_dismissal.mp3

# Ben's Due Process - segment 52: 18:28 duration 35 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 18:28 -t 35 -acodec mp3 original_audio_court/precise/ben_due_process_cooperation_harm.mp3

# Judge's unclear interruption - segment 51: 18:25 duration 3 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 18:25 -t 3 -acodec mp3 original_audio_court/precise/judge_unclear_interruption.mp3

# Ben's Foster Assessment - segment 48: 16:38 duration 68 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 16:38 -t 68 -acodec mp3 original_audio_court/precise/ben_foster_assessment_denial.mp3

# Judge's Child Catastrophe - segment 95: 28:34 duration 15 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 28:34 -t 15 -acodec mp3 original_audio_court/precise/judge_child_catastrophe_statement.mp3

# Ben's Video Context Defense - segment 113: 33:54 duration 9 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 33:54 -t 9 -acodec mp3 original_audio_court/precise/ben_video_context_defense.mp3

# Judge's Mayor Dismissal - segment 112: 33:45 duration 9 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 33:45 -t 9 -acodec mp3 original_audio_court/precise/judge_mayor_vulnerable_child_dismissal.mp3

# Ben's Information Challenge - segment 122: 38:27 duration 27 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 38:27 -t 27 -acodec mp3 original_audio_court/precise/ben_information_withholding_challenge.mp3

# Judge's Information Justification - segments 125: 40:41 duration 33 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 40:41 -t 33 -acodec mp3 original_audio_court/precise/judge_withhold_information_justification.mp3

echo "Precise audio extraction complete!"
echo "Files created:"
ls -la original_audio_court/precise/*.mp3