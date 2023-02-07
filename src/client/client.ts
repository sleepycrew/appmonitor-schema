import { integer } from "../base";

// docs: https://os-docs.iml.unibe.ch/appmonitor/Client/Description_of_response.html

export interface ClientResponse {
  meta: ClientMeta;
  checks: ClientCheck[];
}

export interface ClientMeta {
  host: string;
  website: string;

  ttl?: integer;
  result: CheckResult;
  tags?: string[];
  time?: number;
  notifications?: ClientNotifications;
}

export interface ClientNotifications {
  email?: [];
  slack?: Record<string, string>;
}

/**
 *  @asType integer
 */
export enum CheckResult {
  /**
   * @description Ok
   */
  OK = 0,
  /**
   * unknow
   */
  UNKNOWN = 1,
  WARNING = 2,
  ERROR = 3,
}

export enum VisualType {
  SIMPLE = "simple",
  BAR = "bar",
  LINE = "line",
}

export interface ClientCheck {
  name: string;
  description: string;
  result: CheckResult;
  value: string;
  time?: number;
  parent?: string;
  group?: string;
  count?: number;
  visual?: VisualType;
}
