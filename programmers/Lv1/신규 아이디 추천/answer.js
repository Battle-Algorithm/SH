function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^\w-.]/g, "");
  new_id = new_id.replace(/\.{2,}/g, ".");
  new_id = new_id.replace(/^\.|\.$/g, "");
  if (new_id === "") {
    new_id = "a";
  }
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15).replace(/\.$/, "");
  }
  while (new_id.length < 3) {
    new_id += new_id.charAt(new_id.length - 1);
  }

  return new_id;
}