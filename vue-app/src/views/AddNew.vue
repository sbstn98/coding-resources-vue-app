<template>
  <!--TODO: INPUTS & BUTTONS IN OWN COMPONENT-->
  <div class="container p-5">
    <h1 class="text-3xl">Add a New Ressource</h1>
    <form class="flex flex-col p-5">
      <label class="p-2" for="title">Title:</label>
      <input class="m-2 p-1 border-solid border border-slate-500 rounded-md" type="text" name="title" id="title">
      <label class="p-2" for="subtitle">Subtitle:</label>
      <input class="m-2 p-1 border-solid border border-slate-500 rounded-md" type="text" name="subtitle" id="subtitle">
      <label class="p-2" for="description">Description:</label>
      <input class="m-2 p-1 border-solid border border-slate-500 rounded-md" type="text" name="description"
        id="description">
      <button class="mx-2 my-5 p-2 bg-slate-900 text-white rounded-md">Submit</button>
    </form>
  </div>
</template>






