#!/bin/bash

# Extract audio using correct SRT timestamps 
SOURCE_AUDIO="original_audio_court/CLEAN_AUDIO_LIVERPOOL_COURT.mp3"

echo "Extracting audio using SRT timestamps..."

# Create SRT-based folder
mkdir -p original_audio_court/srt_precise

# ERROR 8 - Ben's De facto parent statement: 00:20:37,140 --> 00:20:38,980 (1.84 seconds)
echo "Extracting Ben de facto parent (20:37)..."
ffmpeg -i "$SOURCE_AUDIO" -ss 00:20:37.140 -t 1.84 -acodec mp3 original_audio_court/srt_precise/ben_de_facto_20_37_srt.mp3

# ERROR 1 - Judge's two parents dismissal: 00:14:34,170 --> 00:14:37,450 (3.28 seconds) 
echo "Extracting Judge two parents dismissal (14:34)..."
ffmpeg -i "$SOURCE_AUDIO" -ss 00:14:34.170 -t 3.28 -acodec mp3 original_audio_court/srt_precise/judge_two_parents_14_34_srt.mp3

echo "SRT-based audio extraction complete!"
echo "Files created:"
ls -la original_audio_court/srt_precise/*.mp3