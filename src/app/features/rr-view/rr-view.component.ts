import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rr-view',
  templateUrl: './rr-view.component.html',
  styleUrls: ['./rr-view.component.scss']
})
export class RrViewComponent implements OnInit {

  @Input()

  htmlCode = '';

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.htmlCode = `
        <div id="divRRPublish" class="RRPublish"></div>
        <script type="text/javascript">
        <!--
            var rrp=new RRPublish(document.getElementById("divRRPublish"), 213562, "live");
        -->
        </script>
        <style>
        /* Add custom CSS here or elsewhere to change the design */
        </style>
    `;
  }

}
