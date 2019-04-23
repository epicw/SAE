import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialactivityService } from '@app/services/socialactivity.service';
import { Socialactivity } from '@app/models/socialactivity';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SocialTopic } from '@app/models/socialtopic';

/**
 * Component
 */
@Component({
  selector: 'app-social-activity',
  templateUrl: './social-activity.component.html',
  styleUrls: ['./social-activity.component.scss']
})

/** Comment.... */
export class SocialActivityComponent implements OnInit {
  public title = 'Social Activity';
  private socialActivities: Socialactivity[];
  private socialTopics: SocialTopic[];
  socialActivityDataDource: MatTableDataSource<any>;
  displayedColumns: string[] = ['source', 'content', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private socialActivityService: SocialactivityService) {}

  ngOnInit() {
    this.socialActivityService
      .getHandlerSocialActivity('Microsoft')
      .subscribe(socialActivities => {
        this.socialActivities = socialActivities;
        this.socialActivityDataDource = new MatTableDataSource(
          socialActivities
        );
        this.socialActivityDataDource.sort = this.sort;
        this.socialActivityDataDource.paginator = this.paginator;
      });

    // this.socialActivityService
    //   .getSocialTopics()
    //   .subscribe(socialTopics => {
    //     this.socialTopics = socialTopics;
    //     console.log(this.socialTopics);
    //   });

  }

  public getTitle() {
    return this.title;
  }
}
