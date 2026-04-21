const mixed = {
  default: '${path} ไม่ถูกต้อง',
  required: '${path} เป็นฟิลด์บังคับ',
  oneOf: '${path} ต้องเป็นหนึ่งในค่าต่อไปนี้: ${values}',
  notOneOf: '${path} ต้องไม่เป็นหนึ่งในค่าต่อไปนี้: ${values}',
};

const string = {
  required: '${path} เป็นฟิลด์บังคับ',
  length: '${path} ต้องมีขนาด ${length} อักขระ',
  min: '${path} ต้องมีอักขระอย่างน้อย ${min} ตัว',
  max: '${path} ต้องมีอักขระไม่เกิน ${max} ตัว',
  matches: '${path} ต้องตรงกับรายการต่อไปนี้: "${regex}"',
  email: '${path} ต้องเป็นอีเมลที่ถูกต้อง',
  url: '${path} URL ไม่ถูกต้อง',
  uuid: '${path} UUID ไม่ถูกต้อง',
  trim: '${path} ต้องไม่มีการเว้นวรรค',
  lowercase: '${path} ต้องเป็นตัวพิมพ์เล็ก',
  uppercase: '${path} ต้องเป็นตัวพิมพ์ใหญ่',
};

const number = {
  required: '${path} เป็นฟิลด์บังคับ',
  min: '${path} ต้องมากกว่าหรือเท่ากับ ${min}',
  max: '${path} ต้องน้อยกว่าหรือเท่ากับ ${max}',
  lessThan: '${path} ต้องน้อยกว่า ${less}',
  moreThan: '${path} ต้องมากกว่า ${more}',
  positive: '${path} ต้องเป็นจำนวนเต็มบวก',
  negative: '${path} ต้องเป็นจำนวนเต็มลบ',
  integer: '${path} ต้องเป็นจำนวนเต็มบวก',
};

const date = {
  required: '${path} เป็นฟิลด์บังคับ',
  min: '${path} ต้องเริ่มหลัง ${min}',
  max: '${path} ต้องเริ่มก่อน ${max}',
};

const boolean = {
  isValue: '${path} ต้องเป็น ${value}',
};

const object = {
  noUnknown: '${path} ต้องระบุคีย์: ${unknown}',
};

const array = {
  min: '${path} ต้องมีอย่างน้อย ${min} รายการ',
  max: '${path} ต้องมีค่าน้อยกว่าหรือเท่ากับ ${max} รายการ',
  length: '${path} ต้องมี ${length} รายการ',
};

export default {
  mixed,
  string,
  number,
  date,
  boolean,
  object,
  array,
};
