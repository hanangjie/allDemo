export default function (obj) {
  console.log("default:"+obj)
}

export function each(obj, iterator, context) {
  console.log("export:"+obj)
}

export { each as forEach };