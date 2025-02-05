<script setup>
    import { useToDoStore } from '@/store/ToDoStore';
    import { reactive } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const store = useToDoStore();
    const todoData = reactive({
        name: route.params.id ? store.detailUser.name : '',
        email: route.params.id ? store.detailUser.email : '',
        phone: route.params.id ? store.detailUser.phone : ''
    })

    const router = useRouter();
    const handleCreateNewData = async() => {
        store.handleCreateUser({id: String(Math.random()), ...todoData});
        router.push('/')
    }

    const handleUpdateData = async() => {
        store.handleUpdateUser({id: route.params.id, ...todoData});
        router.push('/')
    }
</script>

<template>
    <main style="padding: 2rem; color: #000;">
        <h1 style="font-weight: bold;">Create Todo</h1>
        <div style="margin-top: 1rem;">
            <input type="input" placeholder="Enter Name Here!!!" v-model="todoData.name">
        </div>
        <div style="margin-top: 1rem;">
            <input type="input" placeholder="Enter Email Here!!!" v-model="todoData.email">
        </div>
        <div style="margin-top: 1rem;">
            <input type="input" placeholder="Enter Phone Here!!!" v-model="todoData.phone">
        </div>
        <div style="display: flex;">
            <div v-on:click="route.params.id ? handleUpdateData() : handleCreateNewData()" class="btn-main" style="margin-top: 1rem; border-radius: 50px; color: white;">{{ route.params.id ? 'Update User' : 'Create New' }}</div>
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