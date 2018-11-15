
requirejs.config({
    paths: {
        jquery: './node_modules/jquery/dist/jquery',
        bootstrap: './node_modules/bootstrap/dist/js/bootstrap',
        datatables: './node_modules/datatables.net/js/jquery.dataTables',
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
    }
});

require(['jquery','bootstrap','datatables'], function($) {
   console.log('In Script');
   $(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'get',
        dataType: 'json',
        success: function(data) {
            var exampleTable = $('#data-table')
                .DataTable({
                    data: data,
                    'aaSorting': [[1, 'asc']],
                    dom: "<'row'<'col-md-6 text-left'T><'col-md-6 text-right'f>>" +
                        "<'row'<'col-md-12't>>" +
                        "<'row'<'col-md-6'i><'col-md-6'p>>",
                    'columnDefs': [
                        { 'width': '25px', 'targets': [0] },
                        { 'sortable': false, 'targets': [0] }
                    ],
                    'columns': [
                        { 'data': 'userId' },
                        { 'data': 'id' },
                        { 'data': 'title' },
                        { 'data': 'body' },

                    ]
                });
        }
    });
});
});

