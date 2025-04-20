# hibernate


> spring jpa

> pom

``` pom
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```
> 实体类

``` java
package com.surance.coin.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "form")
@EntityListeners(AuditingEntityListener.class)
public class FormEntity implements Serializable {
    private static final long serialVersionUID = 2613903373705318655L;
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;


    @Column(name="projectName", nullable = false)
    @NotNull
    private String projectName;
    @Column(name="tokenName")
    private String tokenName;
}
```
> 基本用法

``` java
public interface PersonRepository extends JpaRepository<Person, Long> {
}
```
> 分页

``` java
package com.surance.coin.service.interfaces;
import com.surance.coin.entity.FormCompleteEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepo extends PagingAndSortingRepository<FormCompleteEntity, Long> , JpaSpecificationExecutor<FormCompleteEntity> {

    Page<FormCompleteEntity> findByEcoContainingAndProjectNameContainingOrTokenNameContainingAndEcoContaining(  String eco, String pn, String tn,String eco1, Pageable pageable);

    Page<FormCompleteEntity> findAll(Pageable pageable);

}

```
