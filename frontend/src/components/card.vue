<template>
    <div class="card">
        <div class="header">
            <slot name="Header"></slot>
        </div>
        <div class="body">
            <slot name="Body"></slot>
        </div>
    </div>
  </template>
  <script>
    export default {
        name: 'cardView'
    }
  </script>