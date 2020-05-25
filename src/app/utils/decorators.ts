export function logMethod(
  target: Object,
  key: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function () {
    const targetName = target.constructor.name;
    const args = JSON.stringify(arguments);
    console.log(`Calling ${targetName}.${key} with ${args}`);
    const result = original.apply(this, arguments);
    return result;
  };

  return descriptor;
}

export function enumerable(value: boolean) {
  return function (
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
    return descriptor;
  };
}

export function readOnly(target: Object, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;
  return descriptor;
}
