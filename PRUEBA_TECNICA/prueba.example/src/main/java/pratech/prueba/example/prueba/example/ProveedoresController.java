package pratech.prueba.example.prueba.example;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.practechgroup.pruebatecnica.model.Proveedor;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController 
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
@CrossOrigin(origins = { "http://localhost:4200"}, maxAge = 6000)
public class ProveedoresController {
 
    @GetMapping
    public List<Proveedor> getProveedores() {

		List<Proveedor> listaProveedores = new ArrayList<Proveedor>();

		Proveedor proveedor = new Proveedor();
		proveedor.setId(1);
		proveedor.setNombre("EEPPM");
		proveedor.setDireccion("carrera 19a 4a 29");
		proveedor.setCiudad("medellin");
		proveedor.setCorreo("pepito@com.hotmail");

		listaProveedores.add(proveedor);

		return listaProveedores;
	}
}