function getExt(filePath) {
  if (typeof filePath !== "string") {
    throw new Error("Функція приймає тільки строкові аргументи.");
  }

  const pathParts = filePath.split("/");
  const fileName = pathParts[pathParts.length - 1];

  if (fileName.includes(".")) {
    const fileExt = fileName.split(".").pop();
    return fileExt;
  } else {
    return "Файл без розширення";
  }
}

const filePath = "/home/user/main.html";
const fileExtension = getExt(filePath);
console.log(fileExtension);
