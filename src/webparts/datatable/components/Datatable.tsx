import * as React from 'react';
import styles from './Datatable.module.scss';
import "../../../assets/css/css.scss";
import "../../../assets/css/css1.css";
import { IDatatableProps } from './IDatatableProps';
import { IDatatableState } from './IDatatableState';
import { escape } from '@microsoft/sp-lodash-subset';


import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';




const data=
{
    "data": [
        {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
        {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
        {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3},
        {"id": "1010","code": "plb34234v","name": "Gold Phone Case","description": "Product Description","image": "gold-phone-case.jpg","price": 24,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
        {"id": "1011","code": "4920nnc2d","name": "Green Earbuds","description": "Product Description","image": "green-earbuds.jpg","price": 89,"category": "Electronics","quantity": 23,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1012","code": "250vm23cc","name": "Green T-Shirt","description": "Product Description","image": "green-t-shirt.jpg","price": 49,"category": "Clothing","quantity": 74,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1013","code": "fldsmn31b","name": "Grey T-Shirt","description": "Product Description","image": "grey-t-shirt.jpg","price": 48,"category": "Clothing","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 3},
        {"id": "1014","code": "waas1x2as","name": "Headphones","description": "Product Description","image": "headphones.jpg","price": 175,"category": "Electronics","quantity": 8,"inventoryStatus": "LOWSTOCK","rating": 5},
        {"id": "1015","code": "vb34btbg5","name": "Light Green T-Shirt","description": "Product Description","image": "light-green-t-shirt.jpg","price": 49,"category": "Clothing","quantity": 34,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1016","code": "k8l6j58jl","name": "Lime Band","description": "Product Description","image": "lime-band.jpg","price": 79,"category": "Fitness","quantity": 12,"inventoryStatus": "INSTOCK","rating": 3},
        {"id": "1017","code": "v435nn85n","name": "Mini Speakers","description": "Product Description","image": "mini-speakers.jpg","price": 85,"category": "Clothing","quantity": 42,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1018","code": "09zx9c0zc","name": "Painted Phone Case","description": "Product Description","image": "painted-phone-case.jpg","price": 56,"category": "Accessories","quantity": 41,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1019","code": "mnb5mb2m5","name": "Pink Band","description": "Product Description","image": "pink-band.jpg","price": 79,"category": "Fitness","quantity": 63,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1020","code": "r23fwf2w3","name": "Pink Purse","description": "Product Description","image": "pink-purse.jpg","price": 110,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
        {"id": "1021","code": "pxpzczo23","name": "Purple Band","description": "Product Description","image": "purple-band.jpg","price": 79,"category": "Fitness","quantity": 6,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1022","code": "2c42cb5cb","name": "Purple Gemstone Necklace","description": "Product Description","image": "purple-gemstone-necklace.jpg","price": 45,"category": "Accessories","quantity": 62,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1023","code": "5k43kkk23","name": "Purple T-Shirt","description": "Product Description","image": "purple-t-shirt.jpg","price": 49,"category": "Clothing","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 5},
        {"id": "1024","code": "lm2tny2k4","name": "Shoes","description": "Product Description","image": "shoes.jpg","price": 64,"category": "Clothing","quantity": 0,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1025","code": "nbm5mv45n","name": "Sneakers","description": "Product Description","image": "sneakers.jpg","price": 78,"category": "Clothing","quantity": 52,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1026","code": "zx23zc42c","name": "Teal T-Shirt","description": "Product Description","image": "teal-t-shirt.jpg","price": 49,"category": "Clothing","quantity": 3,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1027","code": "acvx872gc","name": "Yellow Earbuds","description": "Product Description","image": "yellow-earbuds.jpg","price": 89,"category": "Electronics","quantity": 35,"inventoryStatus": "INSTOCK","rating": 3},
        {"id": "1028","code": "tx125ck42","name": "Yoga Mat","description": "Product Description","image": "yoga-mat.jpg","price": 20,"category": "Fitness","quantity": 15,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1029","code": "gwuby345v","name": "Yoga Set","description": "Product Description","image": "yoga-set.jpg","price": 20,"category": "Fitness","quantity": 25,"inventoryStatus": "INSTOCK","rating": 8}
    ]
}
    
export default class Datatable extends React.Component<IDatatableProps, IDatatableState> {
  emptyProduct = {
    id: null,
    name: '',
    image: null,
    description: '',
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: 'INSTOCK'
};
  toast: any;
  dt: any;
  constructor(props) {
    super(props);
    this.state = {
      products: null,
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: this.emptyProduct,
            selectedProducts: null,
            submitted: false,
            globalFilter: null
    };



    this.leftToolbarTemplate = this.leftToolbarTemplate.bind(this);
    this.rightToolbarTemplate = this.rightToolbarTemplate.bind(this);
    this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
    this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
    this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
    this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
    this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

    this.openNew = this.openNew.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.confirmDeleteProduct = this.confirmDeleteProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.exportCSV = this.exportCSV.bind(this);
    this.confirmDeleteSelected = this.confirmDeleteSelected.bind(this);
    this.deleteSelectedProducts = this.deleteSelectedProducts.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputNumberChange = this.onInputNumberChange.bind(this);
    this.hideDeleteProductDialog = this.hideDeleteProductDialog.bind(this);
    this.hideDeleteProductsDialog = this.hideDeleteProductsDialog.bind(this);
    
  }


public  componentDidMount() {
    this.setState({ products: data });
}

public formatCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

public openNew() {
    this.setState({
        product: this.emptyProduct,
        submitted: false,
        productDialog: true
    });
}

public hideDialog() {
    this.setState({
        submitted: false,
        productDialog: false
    });
}

public hideDeleteProductDialog() {
    this.setState({ deleteProductDialog: false });
}

public hideDeleteProductsDialog() {
    this.setState({ deleteProductsDialog: false });
}

public saveProduct() {
    let state = { submitted: true };

    if (this.state.product.name.trim()) {
        let products = [...this.state.products];
        let product = {...this.state.product};
        if (this.state.product.id) {
            const index = this.findIndexById(this.state.product.id);

            products[index] = product;
            this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        }
        else {
            product.id = this.createId();
            product.image = 'product-placeholder.svg';
            products.push(product);
            this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        }

        // state = {
        //     ...state,
        //     products,
        //     productDialog: false,
        //     product: this.emptyProduct
        // };
    }

    this.setState(state);
}

public editProduct(product) {
    this.setState({
        product: { ...product },
        productDialog: true
    });
}

public confirmDeleteProduct(product) {
    this.setState({
        product,
        deleteProductDialog: true
    });
}

public deleteProduct() {
    let products = this.state.products.filter(val => val.id !== this.state.product.id);
    this.setState({
        products,
        deleteProductDialog: false,
        product: this.emptyProduct
    });
    this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
}

public findIndexById(id) {
    let index = -1;
    for (let i = 0; i < this.state.products.length; i++) {
        if (this.state.products[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

public createId() {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

public exportCSV() {
    this.dt.exportCSV();
}

public confirmDeleteSelected() {
    this.setState({ deleteProductsDialog: true });
}

public deleteSelectedProducts() {
    let products = this.state.products.filter(val => !this.state.selectedProducts.includes(val));
    this.setState({
        products,
        deleteProductsDialog: false,
        selectedProducts: null
    });
    this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
}

public  onCategoryChange(e) {
    let product = {...this.state.product};
    product['category'] = e.value;
    this.setState({ product });
}

public onInputChange(e, name) {
    const val = (e.target && e.target.value) || '';
    let product = {...this.state.product};
    product[`${name}`] = val;

    this.setState({ product });
}

public onInputNumberChange(e, name) {
    const val = e.value || 0;
    let product = {...this.state.product};
    product[`${name}`] = val;

    this.setState({ product });
}

public leftToolbarTemplate() {
    return (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={this.openNew} />
            <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={this.confirmDeleteSelected} disabled={!this.state.selectedProducts || !this.state.selectedProducts.length} />
        </React.Fragment>
    )
}

public rightToolbarTemplate() {
    return (
        <React.Fragment>
            {/* <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="p-mr-2 p-d-inline-block" /> */}
            <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={this.exportCSV} />
        </React.Fragment>
    )
}

public imageBodyTemplate(rowData) {
    return <img src={`showcase/demo/images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
}

public priceBodyTemplate(rowData) {
    return this.formatCurrency(rowData.price);
}

public ratingBodyTemplate(rowData) {
    return <Rating value={rowData.rating} readonly cancel={false} />;
}

public statusBodyTemplate(rowData) {
    return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
}

public actionBodyTemplate(rowData) {
    return (
        <React.Fragment>
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => this.editProduct(rowData)} />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.confirmDeleteProduct(rowData)} />
        </React.Fragment>
    );
}

  public render(): React.ReactElement<IDatatableProps> {
    return (
      <div className="datatable-crud-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <Toolbar className="p-mb-4" left={this.leftToolbarTemplate} right={this.rightToolbarTemplate}></Toolbar>

                    <DataTable ref={(el) => this.dt = el} value={this.state.products} selection={this.state.selectedProducts} onSelectionChange={(e) => this.setState({ selectedProducts: e.value })}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={this.state.globalFilter}
                        header={Headers}>

                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column header="Image" body={this.imageBodyTemplate}></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="rating" header="Reviews" body={this.ratingBodyTemplate} sortable></Column>
                        <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} sortable></Column>
                        <Column body={this.actionBodyTemplate}></Column>
                    </DataTable>
                </div>

                <Dialog visible={this.state.productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid"  onHide={this.hideDialog}>
                {/* footer={productDialogFooter} */}
                    {this.state.product.image && <img src={`showcase/demo/images/product/${this.state.product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={this.state.product.image} className="product-image" />}
                    <div className="p-field">
                        <label htmlFor="name">Name</label>
                        <InputText id="name" value={this.state.product.name} onChange={(e) => this.onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': this.state.submitted && !this.state.product.name })} />
                        {this.state.submitted && !this.state.product.name && <small className="p-invalid">Name is required.</small>}
                    </div>
                    <div className="p-field">
                        <label htmlFor="description">Description</label>
                        <InputTextarea id="description" value={this.state.product.description} onChange={(e) => this.onInputChange(e, 'description')} required rows={3} cols={20} />
                    </div>

                    <div className="p-field">
                        <label className="p-mb-3">Category</label>
                        <div className="p-formgrid p-grid">
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton inputId="category1" name="category" value="Accessories" onChange={this.onCategoryChange} checked={this.state.product.category === 'Accessories'} />
                                <label htmlFor="category1">Accessories</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton inputId="category2" name="category" value="Clothing" onChange={this.onCategoryChange} checked={this.state.product.category === 'Clothing'} />
                                <label htmlFor="category2">Clothing</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton inputId="category3" name="category" value="Electronics" onChange={this.onCategoryChange} checked={this.state.product.category === 'Electronics'} />
                                <label htmlFor="category3">Electronics</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton inputId="category4" name="category" value="Fitness" onChange={this.onCategoryChange} checked={this.state.product.category === 'Fitness'} />
                                <label htmlFor="category4">Fitness</label>
                            </div>
                        </div>
                    </div>

                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="price">Price</label>
                            <InputNumber id="price" value={this.state.product.price} onValueChange={(e) => this.onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                        </div>
                        <div className="p-field p-col">
                            <label htmlFor="quantity">Quantity</label>
                            <InputNumber id="quantity" value={this.state.product.quantity} onValueChange={(e) => this.onInputNumberChange(e, 'quantity')} />
                        </div>
                    </div>
                </Dialog>

                <Dialog visible={this.state.deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal onHide={this.hideDeleteProductDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {this.state.product && <span>Are you sure you want to delete <b>{this.state.product.name}</b>?</span>}
                    </div>
                </Dialog>

                <Dialog visible={this.state.deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal  onHide={this.hideDeleteProductsDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {this.state.product && <span>Are you sure you want to delete the selected products?</span>}
                    </div>
                </Dialog>
            </div>
    );
  }
}
