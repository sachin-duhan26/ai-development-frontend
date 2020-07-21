import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataService } from '../@service/data.service';

@NgModule({
    declarations: [CandidateComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        CandidateRoutingModule,
        PdfViewerModule,
        FormsModule
    ],
    providers: [DataService]
})
export class CandidateModule { }
