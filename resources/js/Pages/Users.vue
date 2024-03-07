<script setup>
import '@/dataTables.daisyui.css'
import 'datatables.net-dt/css/dataTables.dataTables.css'
import $ from 'jquery'
window.jQuery = window.$ = $
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net'

var twPrefix = 'daisy-'
// var twPrefix = ''

// console.log($.fn.dataTable.version, 'version in daisyui')
$.extend(true, DataTablesLib.defaults, {
    renderer: 'daisyui'
})

/* Default class modification */
$.extend(DataTablesLib.ext.classes, {
    container: 'dt-container dt-daisyui',
    search: {
        input: twPrefix + 'input ' + twPrefix + 'input-bordered w-full max-w-xs dt-search'
    },
    length: {
        select: twPrefix + 'select dt-length-select'
    },
    processing: {
        container: twPrefix + 'loading ' + twPrefix + 'loading-dots ' + twPrefix + 'loading-sm'
    },
    paging: {
        active: twPrefix + 'btn-active',
        notActive: '',
        button: twPrefix + 'join-item ' + twPrefix + 'btn',
        first: '',
        last: '',
        elipsis: twPrefix + 'join-item ' + twPrefix + 'btn',
        // ellipsis: twPrefix + 'btn',
        enabled: twPrefix + 'active',
        notEnabled: twPrefix + 'disabled'
    },
    table: 'dataTable ' + twPrefix + 'table ' + twPrefix + 'table ' + twPrefix + 'table-pin-rows'
})

$.extend( true, DataTablesLib.ext.renderer, {
    pagingButton: {
        _: function (settings, buttonType, content, active, disabled) {
            var classes = settings.oClasses.paging;
            var btnClasses = [classes.button];
            var btn;

            if (active) {
                btnClasses.push(classes.active);
            }

            if (disabled) {
                btnClasses.push(classes.disabled)
            }

            if (buttonType === 'ellipsis') {
                btn = $('<span class="ellipsis '+ twPrefix + 'join-item ' + twPrefix + 'btn"></span>').html(content)[0];
            }
            else {
                btn = $('<button>', {
                    class: btnClasses.join(' '),
                    role: 'link',
                    type: 'button'
                }).html(content);
            }

            return {
                display: btn,
                clicker: btn
            }
        }
    }});

    DataTablesLib.ext.renderer.pageButton.daisyui = function (settings, buttonType, content, active, disabled) {
    var classes = settings.oClasses.paging
    var btnClasses = [classes.button]

    btnClasses.push(active ? classes.active : classes.notActive)
    btnClasses.push(disabled ? classes.notEnabled : classes.enabled)

    var a = $('<a>', {
        href: disabled ? null : '#',
        class: btnClasses.join(' ')
    }).html(content)

    return {
        display: a,
        clicker: a
    }
}

DataTablesLib.ext.renderer.pagingContainer.daisyui = function (settings, buttonEls) {
    var classes = settings.oClasses.paging

    buttonEls[0].addClass(classes.first)
    buttonEls[buttonEls.length - 1].addClass(classes.last)

    return $('<ul/>').addClass('pagination daisy-join').append(buttonEls)
}

DataTable.use(DataTablesLib)

const props = defineProps({
    users: {
        type: Array
    }
})

const columns = [{ data: 'id' }, { data: 'name' }, { data: 'email' }]
</script>
<template>
    <div class="p-6 text-gray-900">
        <DataTable :data="props.users" :columns="columns">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
        </DataTable>
    </div>
</template>
