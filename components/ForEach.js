export default function ForEach(array, callback, scope) {
  for (let i = 0; i < array.length; i += 1) {
    callback.call(scope, i, array[i]);
  }
}
