import fs from "fs";
import path from "path";
import {
  GitLabApiClient,
  MergeRequestResource,
  CommitResource,
  NoteResouce,
  DiscussionResource,
} from "../gitlab-api-client";

export class GitLabFixtureClient implements GitLabApiClient {
  constructor(public fixtureName: string) {
  }

  loadFixtue<T>(methodName: string) {
    const data  = fs.readFileSync(path.join(__dirname, `../../test/fixtures/${this.fixtureName}`, `${methodName}.json`), "utf-8");
    return Promise.resolve(JSON.parse(data) as T);
  }

  getMergeRequests(params: { project_id: number; }): Promise<MergeRequestResource[]> {
    return this.loadFixtue<MergeRequestResource[]>("getMergeRequests");
  }
  putMergeRequest(params: { project_id: number; iid: number; }): Promise<MergeRequestResource> {
    return this.loadFixtue<MergeRequestResource>("putMergeRequest");
  }
  getMergeRequestCommits(params: { project_id: number; merge_request_iid: number; }): Promise<CommitResource[]> {
    return this.loadFixtue<CommitResource[]>("getMergeRequestCommits");
  }
  getMergeRequestNotes(params: { project_id: number; merge_request_iid: number; }): Promise<NoteResouce[]> {
    return this.loadFixtue<NoteResouce[]>("getMergeRequestNotes");
  }
  postMergeRequestNote(params: { project_id: number; merge_request_iid: number; body: string; }): Promise<NoteResouce> {
    return this.loadFixtue<NoteResouce>("postMergeRequestNote");
  }
  putMergeRequestNote(params: { project_id: number; merge_request_iid: number; note_id: number; body: string; }): Promise<NoteResouce> {
    return this.loadFixtue<NoteResouce>("putMergeRequestNote");
  }
  postMergeRequestDiscussion(params: { project_id: number; merge_request_iid: number; body: string; }): Promise<DiscussionResource> {
    return this.loadFixtue<DiscussionResource>("postMergeRequestDiscussion");
  }
}
