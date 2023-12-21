class InterfaceGenerator {
  private interfaces: Record<string, string> = {};

  addInterface(name: string, properties: Record<string, string>): void {
    const propertiesString = Object.entries(properties)
      .map(([key, type]) => `${key}: ${type};`)
      .join("\n");

    const interfaceString = `interface ${name} {\n${propertiesString}\n}`;

    this.interfaces[name] = interfaceString;
  }

  getInterfaces(): string {
    return Object.values(this.interfaces).join("\n\n");
  }
}

// Exemplo de uso
const generator = new InterfaceGenerator();

generator.addInterface("Usuario", {
  nome: "string",
  idade: "number",
});

generator.addInterface("Produto", {
  nome: "string",
  preco: "number",
  quantidade: "number",
});

const interfacesGeradas = generator.getInterfaces();
console.log(interfacesGeradas);
