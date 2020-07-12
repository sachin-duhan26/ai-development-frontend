import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
declare var MediaRecorder: any;

@Component({
    selector: 'video-recorder',
    templateUrl: './video-recorder.component.html'
})

export class VideoRecorderComponent implements OnInit {

    @Input() job_name: string = "";
    @Input() question: Observable<Question>;

    public myQuestion: Question;
    public constraints = { "video": { width: { max: 320 } }, "audio": true };
    public theStream: MediaStream;
    public theRecorder;
    public recordedChunks = [];

    public is_video_playing: boolean = false;
    public is_video_submitted: boolean = false;

    ngOnInit() {
        this.question.subscribe(question => { this.myQuestion = question; this.reset() });
    }

    start_recording() {
        if (this.is_video_submitted) return;
        navigator.mediaDevices.getUserMedia(this.constraints)
            .then(stream => this.video_recording_callback(stream))
            .catch(e => {
                console.error('getUserMedia() failed: ' + e);
                window.alert('oops! something went wrong.');
            });
    }

    video_recording_callback(stream) {
        this.theStream = stream;
        var video = document.querySelector('video');
        video.srcObject = stream;
        let recorder;
        try {
            recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
        } catch (e) {
            console.error('Exception while creating MediaRecorder: ' + e);
            window.alert('oops! something went wrong.');
            return;
        }
        this.theRecorder = recorder;
        recorder.ondataavailable =
            (event) => { this.recordedChunks.push(event.data); };
        recorder.start(100);
        this.is_video_playing = true;
    }

    stop() {
        this.theRecorder.stop();
        this.theStream.getTracks().forEach(track => { track.stop(); });
    }

    download() {
        if (this.theRecorder.state == 'recording') {
            this.theRecorder.stop();
            this.theStream.getTracks().forEach(track => { track.stop(); });
        }
        var blob = new Blob(this.recordedChunks, { type: "video/webm" });
        var url = URL.createObjectURL(blob);
        var a = window.document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = `${this.job_name}.webm`;
        a.click();
        setTimeout(function () { URL.revokeObjectURL(url); }, 100);
        this.is_video_submitted = true;

    }

    reset() {
        this.is_video_playing = false;
        this.is_video_submitted = false;
        this.recordedChunks = [];
        this.theRecorder = undefined;
        this.theStream = null;
    }
}

interface Question { question: string, id: string }