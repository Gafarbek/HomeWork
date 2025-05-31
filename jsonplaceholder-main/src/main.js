import { createTodo } from "./helpers/createTodo";
import { httpRequest } from "./helpers/httpRequest";
import { getPosts } from "./requests/getPosts";
import { postTodo } from "./requests/postTodo";

const postsHtml = document.querySelector(".posts");
const formHtml = document.querySelector(".form");
const formButton = document.querySelector(".form button");

const updatePostModal = document.getElementById("update-modal");
const updatePostForm = document.querySelector("#update-modal form");
const updatePostInput = document.querySelector("#update-modal input");
const updatePostTextarea = document.querySelector("#update-modal textarea");
const updatePostButton = document.querySelector("#update-modal button");
const deletePostButton = document.getElementById('delete-post-button')

let posts = [];

function renderPost() {
  postsHtml.innerHTML = '';

  for (const post of posts) {
    postsHtml.insertAdjacentHTML(
      'beforeend',
      createTodo(post.title, post.body, post.id)
    )
  }
  attachPostClickHandlers();
}


async function handlePostSubmit(e) {
  e.preventDefault()

  const formData = new FormData(formHtml)
  const title = formData.get('title')
  const body = formData.get('body')

  if (!title || !body) return

  formButton.disabled = true
  const newPost = await postTodo(title, body)
  formButton.disabled = false

  posts.unshift(newPost)
  localStorage.setItem('posts', JSON.stringify(posts))

  formHtml.reset()
  renderPost()
}

function attachPostClickHandlers() {
  postsHtml.querySelectorAll('.post').forEach((elem) => {
    const postId = +elem.dataset.id
    const post = posts.find((p) => p.id === postId)

    if (!post) return

    elem.addEventListener('click', () => {
      openUpdateModal(post, elem)
    })
  })
}

function openUpdateModal(post, postElem) {
  updatePostInput.value = post.title
  updatePostTextarea.value = post.body
  updatePostButton.disabled = true

  updatePostModal.classList.remove('hidden')
  document.body.classList.add('_lock')

  function closeModal() {
    updatePostModal.classList.add('hidden')
    document.body.classList.remove('_lock')
    updatePostModal.removeEventListener('click', outsideClickListener)
    updatePostForm.removeEventListener('submit', submitListener)
  }

  function outsideClickListener(e) {
    if(!updatePostForm.contains(e.target)) closeModal()
  }

  function submitListener(e) {
    e.preventDefault()

    if(post.id > 100) {
      alert('Этого поста нет на сервере')
      return
    }

    const updatePost = {
      title: updatePostInput.value,
      body: updatePostTextarea.value
    }

    httpRequest(`${import.meta.env.VITE_API_URL}/posts/${post.id}`, 'PUT', {
      'Content-Type': 'application/json',
    }, updatePost).then((response) => {
      const { data, error } = response

      if(error || !data) {
        console.error('Ошибка, пост не обновилься', error);
        alert('Не удалось обновить пост')
        return
      }

        post.title = data.title
        post.body = data.body
        localStorage.setItem('posts', JSON.stringify(posts))

        postElem.querySelector('h3').textContent = data.title
        postElem.querySelector('p').textContent = data.body

        closeModal()
      
    })
  }

  deletePostButton.addEventListener('click', () => {
    const confirmed = confirm('Вы хотите удалить пост?')

    if(!confirmed) return

    httpRequest(`${import.meta.env.VITE_API_URL}/posts/${post.id}`, 'DELETE', {
      'Content-Type': 'application/json'
    })

    posts = posts.filter(p => p.id !== post.id)
    localStorage.setItem('posts', JSON.stringify(posts))
    renderPost()
    updatePostModal.classList.add('hidden')
    document.body.classList.remove('_lock')
  })

  updatePostInput.addEventListener('input', () => {
    updatePostButton.disabled = false
  })
  updatePostTextarea.addEventListener('input', () => {
    updatePostButton.disabled = false
  })

  updatePostForm.addEventListener('submit', submitListener)
  updatePostModal.addEventListener('click', outsideClickListener)
}

async function main() {
  posts = JSON.parse(localStorage.getItem('posts')) || (await getPosts()) || []

  renderPost()
  formButton.addEventListener('click', handlePostSubmit)
}

window.addEventListener('DOMContentLoaded', main)