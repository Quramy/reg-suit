import * as React from "react";
import { InstallationWithRepos } from "../types";
import { InstallationItem } from "./installation-item";

export interface InstallationListProps {
  installations: InstallationWithRepos[];
}

export class InstallationList extends React.Component<InstallationListProps> {
  renderList() {
    const { installations } = this.props;
    return installations.map(i => {
      return (
        <InstallationItem key={i.id} installation={i} />
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}