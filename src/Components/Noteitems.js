import React from 'react'

export default function Noteitems(props) {
  return (
    <>
    <div class="card my-4">
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
  </div>
</div>
    </>
  )
}
