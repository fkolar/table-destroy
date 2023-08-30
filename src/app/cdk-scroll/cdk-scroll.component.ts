import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";

interface TableModel  {
  name: string;
  ready: boolean,
  description: string,
  date: Date
}


@Component({
  selector: 'app-cdk-scroll',
  templateUrl: './cdk-scroll.component.html',
  styleUrls: ['./cdk-scroll.component.scss']
})
export class CdkScrollComponent {
  tableRows: BehaviorSubject<TableModel[]> | undefined;

  ngOnInit(): void {

    this.tableRows = new BehaviorSubject<TableModel[]>([...Array.from({length: 100000}).map((_, i) => {
        return {
          name: `Row #${i}`,
          ready: false,
          description: ` This is some extra description for the text area Row #${i}`,
          date: new Date(),
        }
      }
    )]);
  }

}
