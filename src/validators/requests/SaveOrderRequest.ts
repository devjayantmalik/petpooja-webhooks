import { IsArray, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class SaveOrderRequest {
  @IsString()
  app_key: string;
  @IsString()
  app_secret: string;
  @IsString()
  access_token: string;
  orderinfo: Orderinfo;
}

class Orderinfo {
  @IsObject()
  OrderInfo: OrderInfo;
  @IsString()
  udid: string;
  @IsString()
  device_type: string;
}

class OrderInfo {
  @IsObject()
  Restaurant: Restaurant;
  @IsObject()
  Customer: Customer;
  @IsObject()
  Order: Order;
  @IsObject()
  OrderItem: OrderItem;
  @IsObject()
  Tax: Tax;
  @IsObject()
  Discount: Discount;
}

class Restaurant {
  details: Details;
}

class Details {
  @IsString()
  res_name: string;
  @IsString()
  address: string;
  @IsString()
  contact_information: string;
  @IsString()
  restID: string;
}

class Customer {
  details: Details2;
}

class Details2 {
  @IsString()
  email: string;
  @IsString()
  name: string;
  @IsString()
  address: string;
  @IsString()
  phone: string;
  @IsString()
  latitude: string;
  @IsString()
  longitude: string;
}

class Order {
  details: Details3;
}

class Details3 {
  @IsString()
  @IsOptional()
  orderID: string;
  @IsString()
  preorder_date: string;
  @IsString()
  preorder_time: string;
  @IsString()
  service_charge: string;
  @IsString()
  sc_tax_amount: string;
  @IsString()
  delivery_charges: string;
  @IsString()
  dc_tax_amount: string;
  @IsArray()
  dc_gst_details: DcGstDetail[];
  @IsString()
  packing_charges: string;
  @IsString()
  pc_tax_amount: string;
  @IsArray()
  pc_gst_details: PcGstDetail[];
  @IsString()
  order_type: string;
  @IsString()
  ondc_bap: string;
  @IsString()
  advanced_order: string;
  @IsString()
  payment_type: string;
  @IsString()
  table_no: string;
  @IsString()
  no_of_persons: string;
  @IsString()
  discount_total: string;
  @IsString()
  tax_total: string;
  @IsString()
  discount_type: string;
  @IsString()
  total: string;
  @IsString()
  description: string;
  @IsString()
  created_on: string;
  @IsNumber()
  enable_delivery: numb;
  @IsNumber() er;
  min_prep_time: number;
  @IsString()
  callback_url: string;
}

class DcGstDetail {
  @IsString()
  gst_liable: string;
  @IsString()
  amount: string;
}

class PcGstDetail {
  @IsString()
  gst_liable: string;
  @IsString()
  amount: string;
}

class OrderItem {
  @IsArray()
  details: Detail[];
}

class Detail {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  gst_liability: strin;
  @IsArray() g;
  item_tax: ItemTax[];
  @IsString()
  item_discount: string;
  @IsString()
  price: string;
  @IsString()
  final_price: string;
  @IsString()
  quantity: string;
  @IsString()
  description: string;
  @IsString()
  variation_name: string;
  @IsString()
  variation_id: string;
  AddonItem: AddonItem;
}

class ItemTax {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  amount: string;
}

class AddonItem {
  @IsArray()
  details: Detail2[];
}

class Detail2 {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  group_name: string;
  @IsString()
  price: string;
  @IsNumber()
  group_id: number;
  @IsString()
  quantity: string;
}

class Tax {
  @IsArray()
  details: Detail3[];
}

class Detail3 {
  @IsString()
  id: string;
  @IsString()
  title: string;
  @IsString()
  type: string;
  @IsString()
  price: string;
  @IsString()
  tax: string;
  @IsString()
  restaurant_liable_amt: string;
}

class Discount {
  @IsArray()
  details: Detail4[];
}

class Detail4 {
  @IsString()
  id: string;
  @IsString()
  title: string;
  @IsString()
  type: string;
  @IsString()
  price: string;
}
