document.write("<div>");
// ?
document.write("<table>");
for (i = 1; i < 10; i++) {
    document.write("<tr>");
    for (j = 2; j < 10; j++) {
        document.write(`<td>${j} * ${i} = ${i * j}</td>`);
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");