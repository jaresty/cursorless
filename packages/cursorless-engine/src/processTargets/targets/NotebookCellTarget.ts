import type { InsertionMode } from "@cursorless/common";
import type { CommonTargetParameters } from ".";
import { BaseTarget } from ".";
import type { Destination } from "../../typings/target.types";
import { NotebookCellDestination } from "./NotebookCellDestination";

export default class NotebookCellTarget extends BaseTarget<CommonTargetParameters> {
  type = "NotebookCellTarget";
  insertionDelimiter = "\n";
  isNotebookCell = true;

  constructor(parameters: CommonTargetParameters) {
    super(parameters);
  }

  getLeadingDelimiterTarget = () => undefined;
  getTrailingDelimiterTarget = () => undefined;
  getRemovalRange = () => this.contentRange;

  protected getCloneParameters() {
    return this.state;
  }

  toDestination(insertionMode: InsertionMode): Destination {
    return new NotebookCellDestination(this, insertionMode);
  }
}
