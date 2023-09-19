export class Response {
  public ok: number;
  public dados: any;
  public msg: string;
  public status: number;

  constructor(ok: number, dados: any, msg: string, status: number) {
    this.ok = ok;
    this.dados = dados;
    this.msg = msg;
    this.status = status;
  }
}