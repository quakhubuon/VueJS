<script setup>

</script>

<template>
    <main style="padding: 2rem; color: #000;">
        <h1 style="font-weight: bold;">Create Todo</h1>
        <div style="margin-top: 1rem;">
            <input type="input" placeholder="Enter Email Here!!!" v-model="txtEmail">
        </div>
        <div style="margin-top: 1rem;">
            <input type="input" placeholder="Enter Name Here!!!" v-model="txtName">
        </div>
        <div style="margin-top: 1rem;">
            <input type="input" placeholder="Enter Phone Here!!!" v-model="txtPhone">
        </div>
        <div style="margin-top: 1rem;">
            <input type="input" placeholder="Enter Website Here!!!" v-model="txtWebsite">
        </div>
        <div style="display: flex;">
            <div class="btn-main" style="margin-top: 1rem; border-radius: 50px; color: white;">Create New</div>
        </div>
    </main>
</template>

<style scoped>
    input {
        width: 100%;
        padding: .6rem 1.2rem;
        border-radius: 50px;
        border: none;
        outline: none;
        background: #ededed; 
    }
</style>