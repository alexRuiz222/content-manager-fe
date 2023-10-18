import { Content } from './content';

export interface Topic {
  id: number;
  Name: string;
}

export interface TopicGroup {
  id: number;
  Name: string;
  Content: Content[];
}

export interface TopicsApiResponse {
  ok: boolean;
  status: number;
  data: Topic[];
}
