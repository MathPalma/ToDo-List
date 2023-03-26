<template>
    <table class="table table-hover table-striped small" style="width:500px; margin-left: auto; margin-right:auto;">
        <thead>
          <tr>
  
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td class="col-sm-3">
              <font-awesome-icon icon="fa-regular fa-square" style="cursor: pointer" />
              {{ task.name }}
            </td>
            <td class="col-sm-6">
              <font-awesome-icon icon="fa-solid fa-trash" style="cursor: pointer" />
            </td>
          </tr>
        </tbody>
      </table>
</template>