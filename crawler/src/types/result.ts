export type Result = {
  id: string;
  url: string;
  complete: boolean;
  logs: string[];
  error?: string;
  info?: Record<string, unknown>;
  files?: string[];
  retry: number;
};
