package com.APIConnectFrontend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository cuRep;

    //Prepare some basic methods to be used on APIs

    public List<Customer> listAllCustomers () {
        return cuRep.findAll();
    }

    public Optional<Customer> findCustomer (Integer id) {
        return  cuRep.findById(id);
    }

    public void deleteCustomer(Integer id) {
        cuRep.deleteById(id);
    }

    public Customer createCustomer(Customer cust) {
        return cuRep.save(cust);
    }

}
