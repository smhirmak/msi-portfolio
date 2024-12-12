interface NestedObject {
  [key: string]: any;
}

interface ObjectUtils {
  GetNestedValue: (obj: NestedObject, key: string) => any;
}

const Object: ObjectUtils = {
  GetNestedValue: (obj: NestedObject, key: string): any => {
    const properties = key.split('.');
    let value = obj;
    properties.forEach(prop => {
      if (!value) return null;
      value = value[prop];
    });
    return value;
  },
};

export default Object;
