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
  create_time: string;
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
