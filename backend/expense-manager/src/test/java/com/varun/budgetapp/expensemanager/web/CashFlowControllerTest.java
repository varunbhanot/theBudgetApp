package com.varun.budgetapp.expensemanager.web;

import static com.varun.budgetapp.expensemanager.util.TestingUtil.asJsonString;
import static com.varun.budgetapp.expensemanager.util.TestingUtil.cashFlowByAmountAndType;
import static com.varun.budgetapp.expensemanager.util.TestingUtil.createIncomeCashFlow;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.varun.budgetapp.expensemanager.domain.CashFlow;
import com.varun.budgetapp.expensemanager.domain.CashFlow.CashFlowTypeEnum;
import com.varun.budgetapp.expensemanager.repository.CashFlowRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import cucumber.api.java.Before;

/**
 * IncomeControllerTest
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc


public class CashFlowControllerTest {
    @InjectMocks
    private CashFlowController controller;

    @Autowired
    private CashFlowRepository repository;

    @Autowired
    private MockMvc mockMvc;

    @Before
    public void setup(){
        controller = new CashFlowController();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void shouldCallAddIncome() throws Exception {
        CashFlow request = createIncomeCashFlow();        
        this
        .mockMvc
        .perform(post("/cashflow")
        .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
        .content(asJsonString(request)))        
        .andExpect(status().isCreated());
    }

    @Test 
    public void shouldFailOnBadRequest() throws Exception {
        CashFlow request = createIncomeCashFlow();        
        request.setAmount(null);
        this.mockMvc
        .perform(post("/cashflow")
        .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
        .content(asJsonString(request)))        
        .andExpect(status().isBadRequest());
    }


    @Test
    public void shouldGetAllIncomeEntries() throws Exception {
        CashFlow request1 = createIncomeCashFlow();        
        this
        .mockMvc
        .perform(post("/cashflow")
        .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
        .content(asJsonString(request1)))        
        .andExpect(status().isCreated());

        CashFlow request2 = createIncomeCashFlow();        
        request2.setAmount(BigDecimal.ONE);
        this
        .mockMvc
        .perform(post("/cashflow")
        .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
        .content(asJsonString(request2)))        
        .andExpect(status().isCreated());


        this.mockMvc.perform(get("/cashflow/all")
        .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
        .param("from", LocalDate.now().minusDays(10).toString())
        .param("to", LocalDate.now().toString()))
        .andExpect(status().isOk());

    }


    @Test
    public void shouldGetBalance() throws Exception {
        repository.deleteAll();
        CashFlow request1 = cashFlowByAmountAndType(BigDecimal.valueOf(20L),CashFlowTypeEnum.INCOME,"SALARY");        
        this
        .mockMvc
        .perform(post("/cashflow")
        .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
        .content(asJsonString(request1)))        
        .andExpect(status().isCreated());

        CashFlow request2 = cashFlowByAmountAndType(BigDecimal.valueOf(10L),CashFlowTypeEnum.EXPENSE,"FOOD");         
        this
        .mockMvc
        .perform(post("/cashflow")
        .contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
        .content(asJsonString(request2)))        
        .andExpect(status().isCreated());


        this.mockMvc.perform(get("/balance")        
        .param("from", LocalDate.now().minusDays(10).toString())
        .param("to", LocalDate.now().toString()))
        .andExpect(status().isOk())
        .andExpect(MockMvcResultMatchers.content().string("10.00"));

    }

  

}