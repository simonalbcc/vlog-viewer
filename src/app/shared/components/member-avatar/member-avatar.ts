import { Component, Input } from '@angular/core';

interface Member {
  id: number;
  name: string;
  photo: string;
}

@Component({
  selector: 'vlog-viewer-member-avatar',
  templateUrl: './member-avatar.html',
  styleUrls: ['./member-avatar.css']
})
export class MemberAvatar {
  @Input() members: Member[] = [];

  trackByMember(index: number, member: Member): number {
    return member.id;
  }
}
