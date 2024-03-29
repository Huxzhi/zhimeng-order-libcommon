//api 返回格式
export interface ReturnDto {
  status: number;
  success: boolean;
  message: string;
  data: any;
}

export interface TagDto {
  id: number;
  create_time: string;
  update_time: string;
  tag: string;
  excelOptions: any;
  operator: string;
}

export interface FormItem {
  factory: string;
  order: string;
  huowuno: string;
  wuliaoname: string;
  guige: string;
  caizhi: string;
  color: string;
  number: number;
  height: string;
  date: string;
  beizhu: string;
  printNum: number;
  zidingyi?: boolean;
}

//Dto

export interface MubanEntiyDto {
  id?: number;
  no: string;
  wuliaoname: string;
  item: MubanItemDto;
  tag: string;
  enabled: boolean;
  operator: string;
  create_time?: string;
  update_time?: string;
}

export interface MubanDto {
  data: MubanEntiyDto[];
  total: number;
}

export interface MubanItemDto {
  color: string;
  guige: string;
  caizhi: string;
  height: string;
  number: number;
}

export interface SearchKey {
  keyWord: string;
  page: number;
  pageSize: number;
  tag: string;
}

export interface LogEntiyDto {
  id?: number;
  item: FormItem[];
  songhuoNumString: string;
  songhuoDateString: string;
  tag: string;
  locked: boolean;
  locked_operator?: string;
  credited: boolean;
  credited_operator?: string;
  operator: string;
  create_time?: string;
  update_time?: string;
}

export interface LogDto {
  data: LogEntiyDto[];
  total: number;
}
