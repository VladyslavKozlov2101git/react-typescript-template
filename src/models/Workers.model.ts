export interface WORKER {
  free_account: string | null;
  sales_account: string | null;
  proxy_ip: string | null;
  status: 0 | 1;
  id: number;
  name: string;
}
