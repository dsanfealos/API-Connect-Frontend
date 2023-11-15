package com.APIConnectFrontend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/customers")
public class CustomerRestController {

    @Autowired
    private CustomerService cuSrvc;


    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<Customer> listCustomers () {
        return cuSrvc.listAllCustomers();
    }

    //Get data of an Object. GET.
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Customer> singleCustomer (@PathVariable Integer id) {
        return cuSrvc.findCustomer(id);
    }

    //Delete an object. DELETE.
    @DeleteMapping("/{id}")
    public void deleteCustomer (@PathVariable Integer id) {
        cuSrvc.deleteCustomer(id);
    }

    //Create an object. POST.
    @PostMapping()
    public Customer createCustomer (Customer cust) {
        return cuSrvc.createCustomer(cust);
    }

    //Update the entire Object. PUT.
    @PutMapping()
    public Customer updateEntireCustomer(Customer cust) {
        return cuSrvc.createCustomer(cust);
    }
}
