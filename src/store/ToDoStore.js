import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export const useToDoStore =  defineStore('todos', () => {
    const users = ref([
        {id: '3120411098', name: 'Tran Tuong Minh', email: 'tranminh2014.tm@gmail.com', phone: '113'},
        {id: '3120411099', name: 'Bruce Lee', email: 'lytieulong.tm@gmail.com', phone: '114'},
        {id: '3120411100', name: 'Le Minh', email: 'leminh.tm@gmail.com', phone: '115'},
    ]);

    const txtSearch = ref('');
    const handleChangetxtSearch  = (value) => {
        txtSearch.value = value;
    }

    const filterUsers = computed(() => {
        return users.value.filter(item => item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 || item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1)
    })

    const router = useRoute();
    const detailUser = computed(() => {
        return users.value.find(item => item.id == router.params.id)
    })

    const handleCreateUser = (body) => {
        users.value.push(body);
    }

    const handleDeleteUser = (id) => {
        users.value = users.value.filter(item => item.id !== id);
    }

    const handleUpdateUser = (body) => {
        const index = users.value.findIndex(item => body.id == item.id);
        if (index !== -1) {
            users.value[index].name = body.name;
            users.value[index].email = body.email;
            users.value[index].phone = body.phone;  
        }
    }

    return { users, txtSearch, handleChangetxtSearch , filterUsers, detailUser, handleCreateUser, handleDeleteUser, handleUpdateUser };
});