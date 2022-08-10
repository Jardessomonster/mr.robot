import { ListService } from "../services/list";

export class ListCommand {
  async execute(): Promise<void> {
    await new ListService().execute()
  }
}
