#!/bin/bash

# Extract audio segments from court recording with descriptive names
SOURCE_AUDIO="original_audio_court/CLEAN_AUDIO_LIVERPOOL_COURT.mp3"

echo "Extracting audio segments from court recording..."

# Ben's statements - Child welfare advocacy
ffmpeg -i "$SOURCE_AUDIO" -ss 14:18 -t 5 -acodec mp3 ben_locus_parentis_argument.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 16:38 -t 5 -acodec mp3 ben_foster_assessment_denial.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 18:28 -t 5 -acodec mp3 ben_cooperation_harm_statement.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 28:49 -t 5 -acodec mp3 ben_no_contact_consideration.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 34:03 -t 5 -acodec mp3 ben_video_context_defense.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 38:27 -t 5 -acodec mp3 ben_information_withholding_challenge.mp3

# Judge's dismissive responses
ffmpeg -i "$SOURCE_AUDIO" -ss 14:37 -t 5 -acodec mp3 judge_two_parents_dismissal.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 16:40 -t 3 -acodec mp3 judge_silent_dismissal.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 18:25 -t 5 -acodec mp3 judge_unclear_interruption.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 28:34 -t 5 -acodec mp3 judge_child_catastrophe_statement.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 33:45 -t 5 -acodec mp3 judge_mayor_vulnerable_child_dismissal.mp3
ffmpeg -i "$SOURCE_AUDIO" -ss 38:54 -t 5 -acodec mp3 judge_withhold_information_justification.mp3

echo "Audio extraction complete!"
echo "Files created:"
ls -la *.mp3 | grep -E "(ben_|judge_)"