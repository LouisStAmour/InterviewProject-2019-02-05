"use strict";

/* global $, jQuery */

function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function appendText(element, text) {
  const textElement = document.createTextNode(text);
  element.appendChild(textElement);
}

function solution() {
  jQuery.getJSON("https://www.example.com/articles", function(data) {
    const articlesList = createElement("div", "articles-list");
    data.forEach(a => {
      const article = createElement("div", "article");
      const articleTitle = createElement("div", "article-title");
      appendText(articleTitle, a.title);
      const articleContent = createElement("div", "article-content");
      appendText(articleContent, a.content);
      article.appendChild(articleTitle);
      article.appendChild(articleContent);
      articlesList.appendChild(article);
    });
    const existingList = document.getElementsByClassName("articles-list")[0];
    existingList.parentNode.replaceChild(articlesList, existingList);
  });
}
