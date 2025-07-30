#!/bin/bash

# Extract all key audio segments based on court_scene_complete_segments.json
SOURCE_AUDIO="original_audio_court/CLEAN_AUDIO_LIVERPOOL_COURT.mp3"

echo "Extracting all JSON-based audio segments..."

# Create precise folder
mkdir -p original_audio_court/json_precise

# Key segments for ERROR 8 - De Facto Parent Status
echo "=== ERROR 8: DE FACTO PARENT STATUS ==="
# Ben segment 60: 20:37 duration 2 seconds "De facto parent it would be and."
ffmpeg -i "$SOURCE_AUDIO" -ss 20:37 -t 2 -acodec mp3 original_audio_court/json_precise/ben_de_facto_parent_20_37.mp3

# Judge segment 63: 20:44 duration 5 seconds "There is no such thing as a de facto parent..."
ffmpeg -i "$SOURCE_AUDIO" -ss 20:44 -t 5 -acodec mp3 original_audio_court/json_precise/judge_de_facto_ignorance_20_44.mp3

# Key segments for Locus Standi
echo "=== LOCUS STANDI ARGUMENTS ==="
# Ben segment 30: 14:18 duration 19 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 14:18 -t 19 -acodec mp3 original_audio_court/json_precise/ben_locus_standi_14_18.mp3

# Judge segment 31: 14:37 duration 5 seconds  
ffmpeg -i "$SOURCE_AUDIO" -ss 14:37 -t 5 -acodec mp3 original_audio_court/json_precise/judge_two_parents_14_37.mp3

# Due Process segments
echo "=== DUE PROCESS ARGUMENTS ==="
# Ben segment 52: 18:28 duration 35 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 18:28 -t 35 -acodec mp3 original_audio_court/json_precise/ben_due_process_18_28.mp3

# Judge segment 51: 18:25 duration 3 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 18:25 -t 3 -acodec mp3 original_audio_court/json_precise/judge_interruption_18_25.mp3

# Foster Assessment segments
echo "=== FOSTER ASSESSMENT ==="
# Ben segment 48: 16:38 duration 68 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 16:38 -t 68 -acodec mp3 original_audio_court/json_precise/ben_foster_assessment_16_38.mp3

# Child welfare segments
echo "=== CHILD WELFARE ==="
# Judge segment 95: 28:34 duration 15 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 28:34 -t 15 -acodec mp3 original_audio_court/json_precise/judge_child_catastrophe_28_34.mp3

# Video context segments
echo "=== VIDEO CONTEXT ==="
# Ben segment 113: 33:54 duration 9 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 33:54 -t 9 -acodec mp3 original_audio_court/json_precise/ben_video_defense_33_54.mp3

# Judge segment 112: 33:45 duration 9 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 33:45 -t 9 -acodec mp3 original_audio_court/json_precise/judge_mayor_dismissal_33_45.mp3

# Information withholding segments
echo "=== INFORMATION WITHHOLDING ==="
# Ben segment 122: 38:27 duration 27 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 38:27 -t 27 -acodec mp3 original_audio_court/json_precise/ben_information_challenge_38_27.mp3

# Judge segment 125: 40:41 duration 33 seconds
ffmpeg -i "$SOURCE_AUDIO" -ss 40:41 -t 33 -acodec mp3 original_audio_court/json_precise/judge_withhold_justification_40_41.mp3

echo "JSON-based audio extraction complete!"
echo "Files created:"
ls -la original_audio_court/json_precise/*.mp3